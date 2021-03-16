import md5 from 'md5'

export function getAvatar(state) {
    return state.avatar || 'https://www.gravatar.com/avatar/' + md5(state.email);
}