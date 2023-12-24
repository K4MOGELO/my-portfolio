/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LCw8IE31TDi
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Post() {
  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="grid gap-0.5 text-xs">
          <div className="font-medium">John Doe</div>
          <div className="text-gray-500 dark:text-gray-400">
            Software Engineer
          </div>
        </div>
      </div>
      <CardContent className="prose prose-gray mx-auto dark:prose-invert">
        <p>
          Exciting news! I've accepted a new role at Google as a Senior Software
          Engineer. I am thrilled to join this innovative team and looking
          forward to contributing to some amazing projects!
        </p>
      </CardContent>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button className="text-sm" variant="link">
            <ThumbsUpIcon className="w-4 h-4" />
            23 Likes{"\n                "}
          </Button>
          <Button className="text-sm" variant="link">
            <MessageCircleIcon className="w-4 h-4" />7 Comments
            {"\n                "}
          </Button>
        </div>
        <Button className="text-sm" variant="link">
          <ShareIcon className="w-4 h-4" />
          Share{"\n            "}
        </Button>
      </div>
      <CardFooter className="text-sm text-gray-500 dark:text-gray-400">
        Posted 2 hours ago
      </CardFooter>
    </Card>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
