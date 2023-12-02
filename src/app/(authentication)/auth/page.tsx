import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import SignIn from "@/app/(authentication)/_auth_components/siginin";
import SignUp from "@/app/(authentication)/_auth_components/signup";
export default function Auth() {
  return (
    <Tabs defaultValue="signin">
      <TabsList>
        <TabsTrigger value="signup">SignUp</TabsTrigger>
        <TabsTrigger value="signin">SignIn</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <SignUp />
      </TabsContent>
      <TabsContent value="signin">
        <SignIn />
      </TabsContent>
    </Tabs>
  )
}
