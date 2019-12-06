const iterationStatus = {
    iterationWeek1 : [
        {
            usId: 'US301062', 
            owner:'Thanh', 
            title: 'Add new Tower Ad Slot to SRP', 
            Questions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat', 
            note:'lorem ipsum', 
            progress:'60'
        },
        {
            usId: 'US271107', 
            owner:'Tuong Anh', 
            title: 'Adobe: DFP Ad Tag for Custom Links', 
            Questions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat', 
            note:'lorem ipsum', 
            progress:'23'
        },
        {
            usId: 'US260509', 
            owner:'Duy', 
            title: 'AT Dependency (KBB Advertising) Used Car Landing Page - Add CPO content & CTA to certified inventory (to mitigate CPO landing and research pages going away)', 
            Questions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat', 
            note:'lorem ipsum', 
            progress:'83'
        }
    ],
    iterationWeek2 : [
        {
            usId: 'US251221', 
            owner:'Bob', 
            title: 'Suspendisse mauris libero', 
            Questions: 'Suspendisse mauris libero, cursus sed eleifend et, posuere vel mi. Cras hendrerit malesuada dolor sodales sodales. Cras tincidunt aliquam commodo', 
            note:'Mauris lacinia velit et ultrices congue.', 
            progress:'44'
        },
        {
            usId: 'US414121', 
            owner:'Sam', 
            title: 'Donec lacus dui', 
            Questions: 'Suspendisse sit amet ultrices massa. Etiam rhoncus, tellus luctus interdum varius, mauris dolor facilisis mauris, sed faucibus orci dui at mauris. Sed dictum sagittis ligula sit amet commodo.', 
            note:'onec feugiat ex ac orci aliquet, quis porta lectus fringilla. Fusce ornare viverra tincidunt. Curabitur id lectus ut odio gravida volutpat', 
            progress:'13'
        },
        {
            usId: 'US214214', 
            owner:'Jackson', 
            title: 'Beget dignissim leo dapibus', 
            Questions: 'Nunc et sodales tortor. Curabitur nec gravida orci. Etiam eu sem ligula. Praesent et rhoncus leo. Fusce id nisi ut odio suscipit malesuada. Fusce commodo mauris odio, eu gravida purus viverra vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 
            note:'Vivamus vehicula quis quam ut vehicula.', 
            progress:'89'
        }
    ]
}

const rootReducer = (state = iterationStatus, action) => {
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