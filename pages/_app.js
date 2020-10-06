import '../styles/global.css'
import '../styles/tailwind.css'
import 'antd/dist/antd.css'

export default function App ({Component, pageProps}){
    return <Component{...pageProps} />
}