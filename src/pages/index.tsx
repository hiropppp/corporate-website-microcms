import { ThemeProvider } from "@material-ui/core/styles"

import PageTemplate from "../components/layouts/PageTemplate"
import theme from "../components/utils/theme"

const Home: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <PageTemplate title="Home | Corporate Site Sample">
                    <h1>Hello World!!</h1>
                </PageTemplate>
            </ThemeProvider>
        </>
    )
}

export default Home