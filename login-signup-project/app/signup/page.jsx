import SignupForm from "@/components/SignupForm";

export const metadata = {
  title: "Signup - AuthApp",
  description: "Create a new account",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <SignupForm />
    </div>
  );
}
