import NotFound404 from '../images/404.png'

export const Page404 = () => {
    return(
        <img src={NotFound404} alt="Страница не найдена" style={{width: '100%', height: '100%',position: 'absolute', top: 0, zIndex: 9999}} />
    )
}