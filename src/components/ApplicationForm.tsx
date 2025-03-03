
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, Check } from 'lucide-react';

const ApplicationForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    founderName: '',
    email: '',
    startupName: '',
    website: '',
    foundingYear: '',
    industry: '',
    employees: '',
    fundingRaised: '',
    reason: '',
    agreement: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState((prev) => ({ ...prev, [name]: checked }));
  };

  const validateStep1 = () => {
    if (!formState.founderName || !formState.email || !formState.startupName) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formState.reason || !formState.agreement) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields and accept the terms.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 2 && validateStep2()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Application submitted",
          description: "We've received your application and will be in touch soon.",
        });
        setIsSubmitting(false);
        setStep(3); // Move to success step
        window.scrollTo(0, 0);
      }, 1500);
    }
  };

  return (
    <section id="apply" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Element */}
      <div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Start Your Journey
          </span>
          <h2 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">
            Apply for Acquisition
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Complete the form below to begin the process of transforming your startup journey.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {step < 3 ? (
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                      step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    )}
                  >
                    {step > 1 ? <Check className="h-4 w-4" /> : "1"}
                  </div>
                  <div className="ml-3">
                    <p className={cn(
                      "text-sm font-medium",
                      step >= 1 ? "text-foreground" : "text-muted-foreground"
                    )}>
                      Startup Details
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "flex-grow mx-4 h-px",
                    step > 1 ? "bg-primary" : "bg-border"
                  )}
                ></div>
                <div className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                      step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    )}
                  >
                    {step > 2 ? <Check className="h-4 w-4" /> : "2"}
                  </div>
                  <div className="ml-3">
                    <p className={cn(
                      "text-sm font-medium",
                      step >= 2 ? "text-foreground" : "text-muted-foreground"
                    )}>
                      Additional Information
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div className="glass-panel rounded-xl overflow-hidden">
            {step === 1 && (
              <form className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="founderName">Founder Name *</Label>
                      <Input
                        id="founderName"
                        name="founderName"
                        value={formState.founderName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startupName">Startup Name *</Label>
                    <Input
                      id="startupName"
                      name="startupName"
                      value={formState.startupName}
                      onChange={handleChange}
                      placeholder="Your startup's name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website (optional)</Label>
                    <Input
                      id="website"
                      name="website"
                      value={formState.website}
                      onChange={handleChange}
                      placeholder="https://your-startup.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="foundingYear">Founding Year</Label>
                      <div className="relative">
                        <Input
                          id="foundingYear"
                          name="foundingYear"
                          value={formState.foundingYear}
                          onChange={handleChange}
                          placeholder="YYYY"
                        />
                        <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <select
                        id="industry"
                        name="industry"
                        value={formState.industry}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select Industry</option>
                        <option value="SaaS">SaaS</option>
                        <option value="FinTech">FinTech</option>
                        <option value="HealthTech">HealthTech</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="EdTech">EdTech</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Input
                        id="employees"
                        name="employees"
                        value={formState.employees}
                        onChange={handleChange}
                        placeholder="e.g., 1-5"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fundingRaised">Funding Raised (if any)</Label>
                      <Input
                        id="fundingRaised"
                        name="fundingRaised"
                        value={formState.fundingRaised}
                        onChange={handleChange}
                        placeholder="e.g., €50,000"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="button" 
                      onClick={nextStep} 
                      className="w-full button-hover-effect"
                    >
                      Continue to Next Step
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="reason">Why are you seeking this acquisition? *</Label>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formState.reason}
                      onChange={handleChange}
                      placeholder="Please share why your startup is ending and how this acquisition would help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      id="agreement"
                      name="agreement"
                      type="checkbox"
                      checked={formState.agreement}
                      onChange={handleCheckboxChange}
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="agreement" className="text-sm text-muted-foreground font-normal">
                      I confirm that I have the legal authority to transfer ownership of this startup and that all information provided is accurate. I understand that this is a symbolic acquisition for a nominal fee. *
                    </Label>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={prevStep}
                      className="sm:flex-1"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="sm:flex-1 button-hover-effect"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Application Received</h3>
                <p className="text-muted-foreground mb-8">
                  Thank you for taking this step. Our team will review your application and contact you within 48 hours to discuss the next steps in your acquisition journey.
                </p>
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/10 text-left mb-6">
                  <h4 className="font-medium text-foreground mb-2">What happens next?</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      <span>Our team reviews your application details (1-2 business days)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      <span>We'll reach out to schedule a brief call to discuss your situation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      <span>We'll prepare and send the acquisition documents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                      <span>Upon signing, we'll process the symbolic €1 payment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                      <span>You'll receive all final documentation for your records</span>
                    </li>
                  </ol>
                </div>
                <a 
                  href="/" 
                  className="inline-block text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Return to homepage
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
