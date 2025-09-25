import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const pricingPlans = [
  { id: "essential", name: "Essential", price: "499" },
  { id: "professional", name: "Professional", price: "999" },
  { id: "enterprise", name: "Enterprise", price: "Custom" },
];

export default function AdminPricingPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Manage Pricing</h1>
                <p className="text-muted-foreground">Update pricing information for your service plans.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Edit Plan Prices</CardTitle>
                    <CardDescription>Changes will be reflected on the public pricing page.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {pricingPlans.map(plan => (
                         <div key={plan.id} className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor={`price-${plan.id}`} className="text-right">{plan.name}</Label>
                            <Input id={`price-${plan.id}`} defaultValue={plan.price} className="col-span-2" />
                        </div>
                    ))}
                     <div className="flex justify-end">
                        <Button>Save Changes</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
