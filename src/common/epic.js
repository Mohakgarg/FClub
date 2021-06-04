// external dependencies
import { combineEpics } from 'redux-observable';

import * as userEpics from '../user/user.epics';


const rootEpic = combineEpics(
    userEpics.fetchRecruitersInformationEpic
);

export default rootEpic;