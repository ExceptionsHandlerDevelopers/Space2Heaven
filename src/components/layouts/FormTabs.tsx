import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Input from "../Input"

const FormTabs = () => {
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="admins">Admins</TabsTrigger>
            </TabsList>
            <TabsContent value="users">
                <Card>
                    <CardHeader>
                        <CardTitle>Users</CardTitle>
                        <CardDescription>
                            This is for User for having better experience.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Input title={"Email ID"} value="" placeholder="Enter your EmailID" type={"email"} />
                        <Input title={"Password"} value="" placeholder="Enter your password" type={"password"} />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="admins">
                <Card>
                    <CardHeader>
                        <CardTitle>Admin</CardTitle>
                        <CardDescription>
                            Only for Admins
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Input title={"Email ID"} value="" placeholder="Enter your EmailID" type={"email"} />
                        <Input title={"Password"} value="" placeholder="Enter your password" type={"password"} />
                    </CardContent>
                    <CardFooter>
                        <button className="btn-class">Sign In</button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
export default FormTabs