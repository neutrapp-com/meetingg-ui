import md5 from 'md5'

export function getAvatar(user) {
    return user.avatar || user.email && 'https://www.gravatar.com/avatar/' + md5(user.email);
}