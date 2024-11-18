import Header from "./components/Header.jsx";
import useHashNavigation from "./hooks/useHashNavigation";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { Alert } from "./components/Alerts.jsx";
import { lazy, Suspense } from "react";

export default function App() {
    const { page, param } = useHashNavigation();
    const pageContent = showPage(page, param);

    function showPage(page, param) {
        switch (page) {
            case 'home':
                return <Home />
            case 'post':
                const SingleLazy = lazy(() => import('./pages/Single.jsx'))
                return <Suspense fallback={<div>Chargement des composants en cours</div>}>
                            <SingleLazy postId={param}/>
                       </Suspense>
            case 'contact':
                return <Contact />
            default:
                return <NotFound page={page} />
        }
    }

    function pageError({error}) {
        return <Alert type="danger">{error.toString()}</Alert>
    }

    return (
        <>
            <Header page={page} />
            <ErrorBoundary FallbackComponent={pageError}>
                {pageContent}                
            </ErrorBoundary>
        </>
    )
}
