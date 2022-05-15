export const selectLiibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};