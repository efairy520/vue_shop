import http from '@/utils/http'

export async function getHomeDataApi () {
    let url = 'auth_api/index'
    return http.get(url)
}