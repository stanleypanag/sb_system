import React, { useState, useEffect } from "react";
import { Admin, User } from "./loader/index";
import { supabase } from "../src/supabase/supabase.js";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setIsAuthenticated(true);

        // Fetch the user's role from your Supabase database
        const { data: user, error } = await supabase
          .from("users")
          .select("is_admin, email")
          .eq("user_id", session.user.id)
          .single();

        if (error) {
          console.error("Error fetching user data:", error);
          setIsAuthenticated(false);
        } else {
          setIsAdmin(user.is_admin);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      fetchSession();
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        isAdmin ? (
          <Admin />
        ) : (
          <User value={isAuthenticated} />
        )
      ) : (
        <User value={false} />
      )}
    </div>
  );
};

export default App;
