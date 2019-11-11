export const addStory = (newEntry) => {
    return {
        type: 'ADD_STORY',
        newEntry: newEntry
    }
}