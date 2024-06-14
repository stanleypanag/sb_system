// import React, { useState } from 'react';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { Modal, Button, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function DocumentTable() {
//   const [showModal, setShowModal] = useState(false);
//   const [editingDocument, setEditingDocument] = useState(null);
//   const queryClient = useQueryClient();

//   const { isLoading, error, data } = useQuery({
//     queryKey: ['documents', 'resolutions'],
//     queryFn: () => fetch('http://localhost:5000/api/documents/resolutions').then((res) => res.json()),
//   });

//   const { mutate: deleteDocument } = useMutation(
//     (docId) =>
//       fetch(http://localhost:5000/api/documents/resolutions/${docId}, {
//         method: 'DELETE',
//       }),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(['documents', 'resolutions']);
//         queryClient.refetchQueries(['documents', 'resolutions']);
//       },
//     }
//   );

//   const { mutate: editDocument } = useMutation(
//     (formData) =>
//       fetch(http://localhost:5000/api/documents/${editingDocument.type.toLowerCase()}/${editingDocument.doc_number}, {
//         method: 'PUT',
//         body: formData,
//       }),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(['documents', 'resolutions']);
//         queryClient.refetchQueries(['documents', 'resolutions']);
//       },
//     }
//   );

//   const handleEditClick = (document) => {
//     setEditingDocument(document);
//     setShowModal(true);
//   };

//   const handleClose = () => setShowModal(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     // Add the edited document data to the FormData object
//     formData.append('doc_number', e.target.elements.doc_number.value);
//     formData.append('doc_title', e.target.elements.doc_title.value);
//     formData.append('doc_series_yr', e.target.elements.doc_series_yr.value);

//     editDocument(formData);
//     handleClose();
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//    <>
//       <table>
//         <thead>
//           <tr>
//             <th>Document Number</th>
//             <th>Document Title</th>
//             <th>Document Year</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.data.map((document) => (
//             <tr key={document.doc_id}>
//               <td>{document.doc_number}</td>
//               <td>{document.doc_title}</td>
//               <td>{document.doc_series_yr}</td>
//               <td>
//                 <Button variant="primary" onClick={() => handleEditClick(document)}>
//                   Edit
//                 </Button>
//                 <Button variant="danger" onClick={() => deleteDocument(document.doc_id)}>
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Document</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             {/* Form fields for editing document */}
//             <Button variant="primary" type="submit">
//               Save Changes
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>  );
// }

// //   const handleClose = () => setShowModal(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData(e.target);

// //     // Add the edited document data to the FormData object NASA MODAL
// //     formData.append('doc_number', e.target.elements.doc_number.value);
// //     formData.append('doc_title', e.target.elements.doc_title.value);
// //     formData.append('doc_series_yr', e.target.elements.doc_series_yr.value);

// //     editDocument(formData);
// //     handleClose();
// //   };
// // editDocument(formData); eto yung mutation function
// // na nandito:const { mutate: editDocument } = useMutation(
// //     (formData) =>
// //       fetch(http://localhost:5000/api/documents/$%7BeditingDocument.type.toLowerCase()%7D/$%7BeditingDocument.doc_number%7D, {
// //         method: 'PUT',
// //         body: formData,
// //       }),
// //     {
// //       onSuccess: () => {
// //         queryClient.invalidateQueries(['documents', 'resolutions']);
// //         queryClient.refetchQueries(['documents', 'resolutions']);
// //       },
// //     }
// //   );

// // FROM MEEEEEEEEEEEEEEEEEEE

//   // const editResolutionMutation = useMutation({
//   //   mutationFn: () => {
//   //     const formDataToSend = new FormData();
//   //     formDataToSend.append("doc_id", editingResolution.doc_id);
//   //     formDataToSend.append("doc_type", formData.doc_type);
//   //     formDataToSend.append("doc_number", formData.doc_number);
//   //     formDataToSend.append("doc_series_yr", formData.doc_series_yr);
//   //     formDataToSend.append("doc_title", formData.doc_title);
//   //     if (formData.doc_file_url) {
//   //       formDataToSend.append("doc_file_url", formData.doc_file_url);
//   //     }

//   //     return fetch(
//   //       `http://192.168.1.10:5000/api/documents/${editingResolution.doc_id}`,
//   //       {
//   //         method: "PUT",
//   //         body: formDataToSend,
//   //       }
//   //     );
//   //   },
//   //   onSuccess: () => {
//   //     queryClient.invalidateQueries(["documents", "resolutions"]);
//   //     setEditingResolution(null);
//   //     setIsModalOpen(false);
//   //   },
//   //   onError: (error, variables, context) => {
//   //     console.error("Error updating document:", error);
//   //     alert(
//   //       "An error occurred while updating the document. Please try again later."
//   //     );
//   //   },
//   // });

//   const { mutate } = useMutation({
//     mutationFn: () => {
//       const formDataToSend = new FormData();
//       formDataToSend.append('doc_number', formData.doc_number);
//       formDataToSend.append('doc_title', formData.doc_title);
//       formDataToSend.append('doc_series_yr', formData.doc_series_yr);
//       formDataToSend.append('doc_file_path', formData.doc_file_path); // Add this line
//       if (formData.doc_file_url) {
//         formDataToSend.append('doc_file_url', formData.doc_file_url);
//       }

//       return fetch(`http://192.168.1.10:5000/api/documents/${editingResolution.doc_id}`, {
//         method: 'PUT',
//         body: formDataToSend,
//       });
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['documents', 'esolutions']);
//       setEditingResolution(null);
//       setIsModalOpen(false);
//     },
//     onError: (error, variables, context) => {
//       console.error('Error updating document:', error);
//       alert('An error occurred while updating the document. Please try again later.');
//     },
//   });
