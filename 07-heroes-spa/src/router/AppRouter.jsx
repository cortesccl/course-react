import { Route, Routes } from "react-router-dom"

import { HeroesRoutes, PrivateRoute, PublicRoute } from "../heroes"
import { LoginPage } from "../auth"


export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login/*" element={
              <PublicRoute>
                {/* <LoginPage /> */}
                <Routes>
                  <Route path="/*" element={<LoginPage />} />  
                </Routes>
              </PublicRoute>
            } />

            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            } />

            {/* <Route path="login" element={<LoginPage />} /> */}
            {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        </Routes>
    </>     
  )
}
