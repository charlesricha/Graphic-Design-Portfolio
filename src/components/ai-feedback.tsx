"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleDesignFeedback } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Bot, Lightbulb, Loader2 } from "lucide-react";

const initialState = {
  message: "",
  feedback: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Lightbulb className="mr-2 h-4 w-4" />
          Get Feedback
        </>
      )}
    </Button>
  );
}

export function AiFeedback() {
  const [state, formAction] = useFormState(handleDesignFeedback, initialState);

  return (
    <section id="ai-feedback" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <div className="inline-block bg-primary p-4 rounded-full mb-4">
                <Bot className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-4xl font-bold font-headline">AI Design Feedback</h2>
            <p className="mt-4 max-w-3xl mx-auto text-foreground/80">
            Have a design idea? Paste your design brief below and let our AI provide you with creative direction and feedback to elevate your concept.
            </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Your Design Brief</CardTitle>
              <CardDescription>
                Describe your project, goals, target audience, and any specific ideas you have.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <Textarea
                  name="designBrief"
                  placeholder="e.g., 'A logo for a futuristic coffee shop that appeals to tech workers. Should be minimal and use neon colors...'"
                  rows={8}
                  className="bg-input border-border focus:ring-accent"
                />
                {state.errors?.designBrief && (
                  <p className="text-sm font-medium text-destructive">{state.errors.designBrief}</p>
                )}
                <SubmitButton />
              </form>

              {state.feedback && (
                 <Card className="mt-6 bg-primary/30 border-accent/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-accent">
                            <Lightbulb />
                            AI-Powered Feedback
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="prose prose-invert text-foreground/90 whitespace-pre-wrap">
                            {state.feedback}
                        </div>
                    </CardContent>
                 </Card>
              )}
               {state.message && state.message !== 'Success' && !state.errors && (
                  <p className="mt-4 text-sm font-medium text-destructive">{state.message}</p>
                )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
