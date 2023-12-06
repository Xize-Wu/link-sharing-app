import { ReactNode, createContext, useContext, useState } from "react"
//context for the fake server;

interface User {
    id: number;
    email: string;
    password: string | undefined;
    profile_picture: string | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    profile_email: string | undefined;
    link: Link[]
}

type LinkType = "GitHub" | "Dev.to" | "Frontend Mentor" | "Codewars" | "Twitter" | "freeCodeCamp" | "LinkedIn" | "GitLab" | "YouTube" | "Hashnode" | "Facebook" | "Twitch";

interface Link {
    type: LinkType;
    address: string
}

export interface LoginInfo {
    email: string;
    password: string;
}

interface DatabaseContextType {
    data: User[];
    loginStatus: boolean;
    loginFunction: (item: LoginInfo) => void;
    addToUserDatabase: (item: User) => void;
    addProfileToUser: (id: number, profile_picture: string, first_name: string, last_name: string, profile_email: string) => void;
    addLinkToUser: (id: number, link: Link) => void;
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
                { type: 'GitHub', address: 'https://github.com/xize-wu' },
            ],
        },
    ]);

    const [loginStatus, setLoginStatus] = useState<boolean>(false)

    function loginFunction(item: LoginInfo) {
        console.log('this is data!!!')
        console.log(data)
        for (const user of data) {
            console.log("this is user!!!")
            console.log(user.email)
            console.log(item.email)
            if (user.email === item.email && user.password === item.password) {
                setLoginStatus(true)
                console.log("TRUE!")
            }

        }
        console.log("not logged in!");
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

    function addLinkToUser(id: number, link: Link) {
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