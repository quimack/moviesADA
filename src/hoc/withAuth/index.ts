//  import { FC } from "react"
//  import { useHistory } from "react-router-dom";
//  
//  const publicRoutes = ["/signup", "/login"];
//  type WithAuthFn = (Component: FC) => FC;
//  
//  export const withAuth: WithAuthFn = (Component: FC) => {
//      
//      const Authenticated: FC = (): JSX.Element | null => {
//          const { push, location } = useHistory;
//  
//          return <Component />;
//          };
//      
//      return Authenticated;
//  };

