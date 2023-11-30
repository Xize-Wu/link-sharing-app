import { ReactNode, createContext, useContext, useState } from "react"
//fake server only.
interface Database {
    id: number;
    email: string;
    password: string;
}

interface DatabaseContextType {
    data: Database[];
    addToDatabase: (item: Database) => void;
    testFunction: () => string;
}

interface DatabaseProviderProps {
    children: ReactNode
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

function DatabaseProvider({ children }: DatabaseProviderProps) {

    const [data, setData] = useState<Database[]>([]);

    const addToDatabase = (item: Database) => {
        setData((prevData) => [...prevData, item])
    }

    function testFunction (){
        return "Hello World"
    }
    //const delete

    const contextValue: DatabaseContextType = {
        data,
        addToDatabase,
        testFunction
    }

    return (
        <DatabaseContext.Provider value={contextValue}>
            {children}
        </DatabaseContext.Provider>
    )
}

function useDatabase() {
    const context = useContext(DatabaseContext);
    if (!context) {
        throw new Error('useDatabase must be used within a DatabaseProvider.')
    }
    return context
}

export {DatabaseProvider, useDatabase}