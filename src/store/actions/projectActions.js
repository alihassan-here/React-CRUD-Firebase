export const createProject = (project) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to firestore
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'John',
            authorLastName: 'Doe',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', projectData: project });
        }
        ).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        }
        );
    }
}