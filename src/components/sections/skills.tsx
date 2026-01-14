import { skills, languages, interests } from '@/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">My Skills & Expertise</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          A combination of creative talent and technical proficiency.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Card key={category} className="animate-in fade-in-0 zoom-in-95" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center gap-3">
                {skillList.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="flex items-center gap-2 px-3 py-1 text-sm">
                    <skill.icon className="h-4 w-4 text-primary" />
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="animate-in fade-in-0 zoom-in-95" style={{ animationDelay: '600ms', animationFillMode: 'backwards' }}>
                <CardHeader><CardTitle className="font-headline text-xl">Languages</CardTitle></CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-3">
                    {languages.map(lang => <Badge key={lang} variant="outline" className="px-3 py-1 text-sm">{lang}</Badge>)}
                </CardContent>
            </Card>
             <Card className="animate-in fade-in-0 zoom-in-95" style={{ animationDelay: '750ms', animationFillMode: 'backwards' }}>
                <CardHeader><CardTitle className="font-headline text-xl">Interests</CardTitle></CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-3">
                    {interests.map(interest => <Badge key={interest} variant="outline" className="px-3 py-1 text-sm">{interest}</Badge>)}
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
