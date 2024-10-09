import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export interface AnnouncementsCardProps {
  title: string
  date: string
  description: string
  borderColor: string
}

export default function AnnouncementsCard({ title, date, description, borderColor }: AnnouncementsCardProps = {
  title: "Lorem ipsum dolor",
  date: "2025-01-01",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  borderColor: "bg-blue-500"
}) {
  return (
    <Card className={`w-full mb-2 overflow-hidden rounded-sm ${borderColor}`}>
      <CardHeader className="pb-1 pt-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-3 w-full">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}