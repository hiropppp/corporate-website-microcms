import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { Container, Grid } from "@material-ui/core"

import Slider from "../components/home/Slider"
import Introductions from "../components/home/Introductions"
import PageTemplate from "../components/layouts/PageTemplate"
import theme from "../components/utils/theme"

const useStyles = makeStyles(() => ({
    container: {
        marginTop: "3rem"
    }
}))

interface Item {
    name: string
    description: string
    color: string
}

interface Introduction {
    title: string
    description: string
    action: string
    href: string
}

const Home: React.FC = () => {
    const classes = useStyles()

    const items: Item[] = [
        {
            name: "Slide1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            color: "#64ACC8"
        },
        {
            name: "Slide2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            color: "#7D85B1"
        },
        {
            name: "Slide3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            color: "#CE7E78"
        }
    ]

    const introductions: Introduction[] = [
        {
            title: "Service",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            action: "About Service >",
            href: "/service"
        },
        {
            title: "Company",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            action: "About Company >",
            href: "/company"
        },
        {
            title: "Recruit",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            action: "About Recruit >",
            href: "/recruit"
        }
    ]

    return (
        <>
            <ThemeProvider theme={theme}>
                <PageTemplate title="Home | Corporate Site Sample">
                    <>
                        <Slider
                            items={items}
                        />
                        {introductions.map((introduction, index) => (
                            <Container key={index} maxWidth="lg" className={classes.container}>
                                <Grid container style={{ justifyContent: index % 2 == 0 ? "flex-start" : "flex-end" }}>
                                    <Grid item lg={6} md={6}>
                                        <Introductions
                                            index={index}
                                            title={introduction.title}
                                            description={introduction.description}
                                            action={introduction.action}
                                            href={introduction.href}
                                        />
                                    </Grid>
                                </Grid>
                            </Container>
                        ))
                        }
                    </>
                </PageTemplate>
            </ThemeProvider>
        </>
    )
}

export default Home