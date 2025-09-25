import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, DollarSign, Briefcase, Users } from "lucide-react";
import Link from "next/link";

const summaryCards = [
    { title: "Resources", icon: <FileText className="h-6 w-6 text-muted-foreground" />, value: 4, link: "/admin/resources", description: "Blog posts & whitepapers" },
    { title: "Pricing Plans", icon: <DollarSign className="h-6 w-6 text-muted-foreground" />, value: 3, link: "/admin/pricing", description: "Manage service tiers" },
    { title: "Case Studies", icon: <Briefcase className="h-6 w-6 text-muted-foreground" />, value: 3, link: "/admin/case-studies", description: "Success stories" },
    { title: "Contact Submissions", icon: <Users className="h-6 w-6 text-muted-foreground" />, value: 12, link: "#", description: "Recent inquiries" },
];

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {summaryCards.map((card) => (
                    <Card key={card.title} className="hover:bg-muted/50 transition-colors">
                        <Link href={card.link}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                                {card.icon}
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{card.value}</div>
                                <p className="text-xs text-muted-foreground">{card.description}</p>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <Card>
                    <CardHeader>
                        <CardTitle>Welcome to the IntelX Admin Panel</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            From this dashboard, you can manage your website's content, including resources, pricing plans, and case studies. Use the navigation on the left to get started.
                        </p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-2">
                       <Link href="/admin/resources" className="text-primary hover:underline">Add a new resource</Link>
                       <Link href="/admin/case-studies" className="text-primary hover:underline">Create a new case study</Link>
                       <Link href="/admin/pricing" className="text-primary hover:underline">Update pricing information</Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
