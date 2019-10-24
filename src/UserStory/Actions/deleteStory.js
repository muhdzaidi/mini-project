const DELETE_STORY;

export const deleteStory = (id) => {
    return {
        type: 'DELETE_STORY',
        id: id
    }
}