import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export interface EventCardProps {
  title: string
  time: string
  description: string
  borderColor: string
}

export default function EventCard({ title, time, description, borderColor }: EventCardProps = {
  title: "Lorem ipsum dolor",
  time: "12:00 PM - 2:00 PM",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  borderColor: "bg-blue-500"
}) {
  return (
    <Card className="w-full mb-2 overflow-hidden rounded-sm">
      <div className={`h-1 ${borderColor} rounded-t-full`} />
      <CardHeader className="pb-1 pt-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <span className="text-sm text-muted-foreground">{time}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}