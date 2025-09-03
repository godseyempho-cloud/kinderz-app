import React, { createContext, useState, useContext, ReactNode } from "react";

type UserRole = "ECD" | "PROVINCIAL" | "DBE";

interface AuthContextType {
  user: { email: string; role: UserRole } | null;
  login: (email: string, role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);

  const login = (email: string, role: UserRole) => {
    setUser({ email, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
