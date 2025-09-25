import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  { id: "1", title: "Fortune 500 Retailer Defeats Phishing", industry: "Retail" },
  { id: "2", title: "Financial Tech Firm Secures Cloud", industry: "FinTech" },
  { id: "3", title: "Healthcare Provider Recovers from Ransomware", industry: "Healthcare" },
];

export default async function AdminCaseStudiesPage() {
    const studies = caseStudies;

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Manage Case Studies</h1>
                    <p className="text-muted-foreground">Showcase your successes by adding and editing case studies.</p>
                </div>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Case Study
                </Button>
            </div>
            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Industry</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {studies.map(study => (
                                <TableRow key={study.id}>
                                    <TableCell className="font-medium">{study.title}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{study.industry}</Badge>
                                    </TableCell>
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
