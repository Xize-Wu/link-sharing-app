import { ReactNode, createContext, useContext, useState } from "react"
import { User, LinkInterface, LoginInfo } from "./types";


interface DatabaseContextType {
    data: User[];
    loginStatus: boolean;
    linkArray: LinkInterface[];
    loginFunction: (item: LoginInfo) => void;
    addToUserDatabase: (item: User) => void;
    addProfileToUser: (id: number, profile_picture: string, first_name: string, last_name: string, profile_email: string) => void;
    addLinkToUser: (id: number, link: LinkInterface) => void;
    testFunction: () => string;
}

interface DatabaseProviderProps {
    children: ReactNode
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

function DatabaseProvider({ children }: DatabaseProviderProps) {

    const [data, setData] = useState<User[]>([
        {
            id: 1,
            email: 'asterwu2@gmail.com',
            password: '1',
            profile_picture: 'profile.jpg',
            first_name: 'Aster',
            last_name: 'Wu',
            profile_email: 'asterwu2@gmail.com',
            link: [
                { index: 1, platform: 'GitHub', address: 'https://github.com/xize-wu' },
                { index: 2, platform: 'Codewars', address: 'https://www.codewars.com/users/Xize-Wu'}
            ],
        },
    ]);


    const [loginStatus, setLoginStatus] = useState<boolean>(false)
    const [linkArray, setLinkArray] = useState<LinkInterface[]>([])
    function loginFunction(item: LoginInfo) {
        for (const user of data) {
            if (user.email === item.email && user.password === item.password) {
                setLoginStatus(true)
                setLinkArray(user.link)
            }

        }
    }

    function addToUserDatabase(item: User) {
        setData((prevData) => [...prevData, item])
    }

    function addProfileToUser(id: number, profile_picture: string, first_name: string, last_name: string, profile_email: string) {
        setData((prevData) => {
            return prevData.map((user) =>
                user.id === id
                    ? { ...user, profile_picture: profile_picture, first_name: first_name, last_name: last_name, profile_email: profile_email }
                    : user
            )
        }
        )
    }

    function addLinkToUser(id: number, link: LinkInterface) {
        setData((prevData) => {
            return prevData.map((user) =>
                user.id === id ? { ...user, link: [...user.link, link] }
                    : user
            )
        })
    }

    function testFunction() {
        return "Hello World"
    }

    const contextValue: DatabaseContextType = {
        data,
        loginStatus,
        linkArray,
        loginFunction,
        addToUserDatabase,
        addProfileToUser,
        addLinkToUser,
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

export { DatabaseProvider, useDatabase }