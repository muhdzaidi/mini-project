const initState = {
    stories: [
        {usId: 'US301062', title: 'Add new Tower Ad Slot to SRP', Questions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {usId: 'US271107', title: 'Adobe: DFP Ad Tag for Custom Links', Questions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {usId: 'US260509', title: 'AT Dependency (KBB Advertising) Used Car Landing Page - Add CPO content & CTA to certified inventory (to mitigate CPO landing and research pages going away)', Questions: ''}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_STORY'){
        let newStories = state.stories.filter(story => {
            return action.id !== story.id
        });
        return {
            ...state,
            stories: newStories
        }
    }
    return state;
}

export default rootReducer