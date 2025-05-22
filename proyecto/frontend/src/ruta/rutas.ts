export function useLayout(pathname: string ) {
    const routes= [{
        path: '/',
        name: 'Inicio'
    }, 
    {
        path: '/product',
        name: 'Productos'
    },
    
    ];

    const title = pathname === "/"
    ? "Login"
    : pathname === "/user"
    ? "User"
    : "blog";
    return{
       title, routes
    }
}