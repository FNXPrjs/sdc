import { AuthPage } from "@refinedev/mui";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        defaultValues: { email: "demo@sdc.dev", password: "demodemo" },
      }}
      renderContent={(content: React.ReactNode) => {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1>SDC</h1>
                {content}
                {/* <h2>Extra Footer</h2> */}
            </div>
        );
    }}
    />
  );
};
