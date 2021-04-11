import React from "react";
import { BackendProvider } from "@gooddata/sdk-ui";

import AppRouter from "./routes/AppRouter";
import { useAuth } from "./contexts/Auth";
import { WorkspaceListProvider } from "./contexts/WorkspaceList";
import {LocalesContext, createLocalesState} from "./contexts/Locales";
import {Locales} from "./constants";

function App() {
    const { backend } = useAuth();

    return (
        <BackendProvider backend={backend}>
            <WorkspaceListProvider>
                <LocalesContext.Provider value={createLocalesState(Locales)}>
                    <AppRouter />
                </LocalesContext.Provider>
            </WorkspaceListProvider>
        </BackendProvider>
    );
}

export default App;
