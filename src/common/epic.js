// external dependencies
import { combineEpics } from 'redux-observable';

import * as userEpics from '../user/user.epics';


const rootEpic = combineEpics(
    userEpics.fetchRecruitersInformationEpic,
    userEpics.addUserEpic,
    userEpics.addUserFulfilledEpic,
    userEpics.deleteUserEpic,
    userEpics.deleteUserFulfilledEpic,
    userEpics.editUserEpic,
    userEpics.editUserFulfilledEpic
);

export default rootEpic;