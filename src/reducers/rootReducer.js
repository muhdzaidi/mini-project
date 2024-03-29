const initState = {
    stories: [
        {usId: 'US301062', owner:'Thanh', title: 'Add new Tower Ad Slot to SRP', Questions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat', note:'lorem ipsum', progress:'60'},
        {usId: 'US271107', owner:'Tuong Anh', title: 'Adobe: DFP Ad Tag for Custom Links', Questions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat', note:'lorem ipsum', progress:'23'},
        {usId: 'US260509', owner:'Duy', title: 'AT Dependency (KBB Advertising) Used Car Landing Page - Add CPO content & CTA to certified inventory (to mitigate CPO landing and research pages going away)', Questions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat', note:'lorem ipsum', progress:'83'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_STORY'){
        let newStories = state.stories.filter(story => {
            return action.id !== story.usId
        });
        return {
            ...state,
            stories: newStories
        }
    } else if (action.type === 'ADD_STORY'){
        return { 
            ...state,
            stories: [...state.stories, action.newEntry]
        }
        
    }
    return state;
}

export default rootReducer