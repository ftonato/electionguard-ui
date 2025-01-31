import { BaseJointKey, User, getApiClient } from '@electionguard-ui/api';
import { useQuery } from 'react-query';

import { AsyncResult } from './AsyncResult';
import { QUERY_NAMES } from './query_names';

export function useGetUsersWithGuardianRole(): AsyncResult<User[]> {
    const service = getApiClient();
    return useQuery(QUERY_NAMES.GUARDIANS, () => service.getUsersWithGuardianRole());
}

export function useCreateJointKey(data: BaseJointKey): Promise<boolean> {
    const service = getApiClient();
    return service.createJointKey(data);
}

export default useGetUsersWithGuardianRole;
