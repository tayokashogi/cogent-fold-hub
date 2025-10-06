import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Book, Cake, Bell, BellOff, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/page-header";
import { TextToSpeechButton } from "@/components/text-to-speech-button";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useNotifications } from "@/hooks/use-notifications";
import { useToast } from "@/hooks/use-toast";

// Event data structure
interface ChurchEvent {
  id: string;
  title: string;
  date: Date;
  description: string;
}

// Sample events - in production would come from a database
const sampleEvents: ChurchEvent[] = [
  { id: "1", title: "Sunday Worship Service", date: new Date(2025, 9, 12, 9, 0), description: "Join us for worship" },
  { id: "2", title: "Bible Study", date: new Date(2025, 9, 15, 18, 0), description: "Weekly Bible study session" },
  { id: "3", title: "Youth Fellowship", date: new Date(2025, 9, 17, 18, 0), description: "Youth gathering and fellowship" },
  { id: "4", title: "Prayer Meeting", date: new Date(2025, 9, 20, 6, 0), description: "Morning prayer session" },
];

/**
 * Calendar Page Component
 * Features daily devotionals, monthly birthday celebrations, and event registration
 */
const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [rsvps, setRsvps] = useLocalStorage<string[]>('event-rsvps', []);
  const { permission, requestPermission, sendNotification, isSupported } = useNotifications();
  const { toast } = useToast();

  // Daily devotional content (automated based on date)
  const getDailyDevotional = (selectedDate: Date) => {
    const dayOfYear = Math.floor((selectedDate.getTime() - new Date(selectedDate.getFullYear(), 0, 0).getTime()) / 86400000);
    
    const devotionals = [
      {
        title: "Walk in Faith",
        verse: "Hebrews 11:1",
        text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
        reflection: "Today, trust God's promises even when you cannot see the outcome. Faith is the foundation of our Christian walk."
      },
      {
        title: "Love One Another",
        verse: "1 John 4:7-8",
        text: "Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God.",
        reflection: "Show God's love to everyone you encounter today. Love is the mark of a true believer."
      },
      {
        title: "Strength in the Lord",
        verse: "Philippians 4:13",
        text: "I can do all things through Christ who strengthens me.",
        reflection: "Whatever challenges you face today, remember that Christ's strength is sufficient for you."
      },
      {
        title: "Peace of God",
        verse: "Philippians 4:6-7",
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God.",
        reflection: "Release your worries to God in prayer. His peace will guard your heart and mind."
      },
      {
        title: "God's Faithfulness",
        verse: "Lamentations 3:22-23",
        text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning.",
        reflection: "Each morning brings fresh mercy from God. His faithfulness is your foundation."
      }
    ];

    return devotionals[dayOfYear % devotionals.length];
  };

  // Birthday celebrations (example data - would be from database)
  const getBirthdaysForMonth = (selectedDate: Date) => {
    const month = selectedDate.getMonth();
    
    // Example birthdays - in production, this would come from a database
    const allBirthdays = [
      { name: "Pastor John Adeyemi", date: new Date(2024, 0, 15), role: "Senior Pastor" },
      { name: "Sister Grace Ogunlade", date: new Date(2024, 1, 23), role: "Choir Director" },
      { name: "Brother David Oluwole", date: new Date(2024, 2, 8), role: "Youth Leader" },
      { name: "Sister Mary Akinwale", date: new Date(2024, 3, 12), role: "Women's Ministry" },
      { name: "Deacon Samuel Ayodele", date: new Date(2024, 4, 30), role: "Deacon" },
      { name: "Sister Ruth Adeleke", date: new Date(2024, 5, 18), role: "Sunday School Teacher" },
      { name: "Brother Peter Okafor", date: new Date(2024, 6, 25), role: "Usher Coordinator" },
      { name: "Sister Joy Nnamdi", date: new Date(2024, 7, 9), role: "Prayer Coordinator" },
      { name: "Brother Emmanuel Taiwo", date: new Date(2024, 8, 14), role: "Media Team" },
      { name: "Sister Faith Oladipo", date: new Date(2024, 9, 21), role: "Children's Ministry" },
      { name: "Deacon Michael Balogun", date: new Date(2024, 10, 7), role: "Deacon" },
      { name: "Sister Peace Adebayo", date: new Date(2024, 11, 16), role: "Hospitality Team" },
    ];

    return allBirthdays
      .filter(b => b.date.getMonth() === month)
      .sort((a, b) => a.date.getDate() - b.date.getDate());
  };

  const currentDevotional = date ? getDailyDevotional(date) : null;
  const monthlyBirthdays = date ? getBirthdaysForMonth(date) : [];
  const selectedMonth = date ? date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : '';

  // RSVP handlers
  const handleRSVP = (eventId: string, eventTitle: string) => {
    if (rsvps.includes(eventId)) {
      setRsvps(rsvps.filter(id => id !== eventId));
      toast({
        title: "RSVP Cancelled",
        description: `You've cancelled your RSVP for ${eventTitle}`,
      });
    } else {
      setRsvps([...rsvps, eventId]);
      toast({
        title: "RSVP Confirmed",
        description: `You've registered for ${eventTitle}`,
      });
      
      // Send notification if enabled
      if (permission === 'granted') {
        sendNotification("Event RSVP Confirmed", {
          body: `You're registered for ${eventTitle}`,
        });
      }
    }
  };

  // Get devotional text for TTS
  const getDevotionalText = () => {
    if (!currentDevotional) return "";
    return `${currentDevotional.title}. ${currentDevotional.verse}. ${currentDevotional.text}. Reflection: ${currentDevotional.reflection}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background">
      <PageHeader
        title="Church Calendar"
        description="Daily devotionals, birthday celebrations, and upcoming events"
        icon={CalendarDays}
      >
        <div className="flex gap-2 flex-wrap">
          {isSupported && permission !== 'granted' && (
            <Button onClick={requestPermission} variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Enable Notifications
            </Button>
          )}
          {permission === 'granted' && (
            <Badge variant="secondary" className="gap-1">
              <BellOff className="h-3 w-3" />
              Notifications Enabled
            </Badge>
          )}
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="devotional" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="devotional" className="gap-2">
              <Book className="h-4 w-4" />
              Devotional
            </TabsTrigger>
            <TabsTrigger value="events" className="gap-2">
              <CalendarDays className="h-4 w-4" />
              Events
            </TabsTrigger>
            <TabsTrigger value="birthdays" className="gap-2">
              <Cake className="h-4 w-4" />
              Birthdays
            </TabsTrigger>
          </TabsList>

          {/* Daily Devotional Tab */}
          <TabsContent value="devotional" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Calendar Component */}
              <Card className="card-interactive">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    Select a Date
                  </CardTitle>
                  <CardDescription>Choose a date to view the daily devotional</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              {/* Devotional Content */}
              {currentDevotional && (
                <Card className="card-featured border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 text-primary">
                          {currentDevotional.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mb-4">
                          {date?.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </Badge>
                        <TextToSpeechButton 
                          text={getDevotionalText()} 
                          className="mt-2"
                        />
                      </div>
                      <Book className="h-8 w-8 text-accent" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-secondary/10 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-primary mb-2">{currentDevotional.verse}</p>
                      <p className="text-muted-foreground italic">"{currentDevotional.text}"</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">Reflection</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {currentDevotional.reflection}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <Card className="card-featured">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <CalendarDays className="h-6 w-6 text-primary" />
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>
                    Register for upcoming church events and activities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sampleEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CalendarDays className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                        <p className="text-sm text-primary font-medium mt-1">
                          {event.date.toLocaleDateString('en-US', { 
                            weekday: 'long',
                            month: 'long', 
                            day: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <Button
                        onClick={() => handleRSVP(event.id, event.title)}
                        variant={rsvps.includes(event.id) ? "default" : "outline"}
                        size="sm"
                      >
                        {rsvps.includes(event.id) ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Registered
                          </>
                        ) : (
                          "RSVP"
                        )}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Birthday Celebrations Tab */}
          <TabsContent value="birthdays" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Calendar Component */}
              <Card className="card-interactive">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    Select a Month
                  </CardTitle>
                  <CardDescription>View birthday celebrations for the selected month</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              {/* Birthday List */}
              <Card className="card-featured border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Cake className="h-6 w-6 text-accent" />
                    Birthday Celebrations
                  </CardTitle>
                  <CardDescription className="text-base">
                    {selectedMonth}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {monthlyBirthdays.length > 0 ? (
                    <div className="space-y-4">
                      {monthlyBirthdays.map((birthday, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-accent/5 to-secondary/5 border border-accent/10 hover:border-accent/30 transition-all"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <Cake className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{birthday.name}</h4>
                            <p className="text-sm text-muted-foreground">{birthday.role}</p>
                            <p className="text-sm text-primary font-medium mt-1">
                              {birthday.date.toLocaleDateString('en-US', { 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Cake className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                      <p className="text-muted-foreground">
                        No birthdays scheduled for this month
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CalendarPage;