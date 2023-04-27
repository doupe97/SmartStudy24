import { Auth } from 'aws-amplify';

const getCurrentUser = async () => {
    return await Auth.currentAuthenticatedUser({ bypassCache: true });
};

export default getCurrentUser;