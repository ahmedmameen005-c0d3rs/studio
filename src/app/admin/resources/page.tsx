import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// In a real app, this data would be fetched from Firestore
const resources = [
  { id: "1", title: "The 2024 Global Threat Landscape", type: "Whitepaper", date: "2024-07-15" },
  { id: "2", title: "Zero Trust Architecture Guide", type: "Blog Post", date: "2024-07-10" },
  { id: "3", title: "AI in Phishing Detection", type: "Blog Post", date: "2024-07-01" },
];

export default async function AdminResourcesPage() {
    // TODO: Replace with dynamic data fetching and a client component for interactions
    const posts = resources;

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Manage Resources</h1>
                    <p className="text-muted-foreground">Create, edit, and delete blog posts and whitepapers.</p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Resource
                </Button>
            </div>
            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {posts.map(post => (
                                <TableRow key={post.id}>
                                    <TableCell className="font-medium">{post.title}</TableCell>
                                    <TableCell>
                                        <Badge variant={post.type === 'Whitepaper' ? 'default' : 'secondary'}>{post.type}</Badge>
                                    </TableCell>
                                    <TableCell>{post.date}</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="outline" size="sm">Edit</Button>
                                        <Button variant="destructive" size="sm">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
