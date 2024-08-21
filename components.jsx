/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HzdREtWH34O
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselItem } from "@/components/ui/carousel"

export default function Component() {
  return (
    <div className="dark:bg-background">
      <header className="bg-background text-foreground shadow">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Acme Hosting</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="link">Get Started</Button>
            <Button>Free Trial</Button>
          </div>
        </div>
      </header>
      <main>
        <section id="features" className="bg-background py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Powerful Features for Your Business</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Our hosting platform offers a wide range of features to help your business succeed online.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <CpuIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium">Scalable Infrastructure</h3>
                <p className="mt-2 text-muted-foreground">
                  Our hosting platform scales seamlessly to handle your growing traffic and data needs.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <ShieldIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium">Robust Security</h3>
                <p className="mt-2 text-muted-foreground">
                  We take security seriously, with advanced features to protect your website and data.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <RocketIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-medium">Blazing-Fast Performance</h3>
                <p className="mt-2 text-muted-foreground">
                  Our hosting platform is optimized for lightning-fast page loads and seamless user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="bg-muted py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Affordable Pricing Plans</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Choose the plan that fits your business needs and budget.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Carousel className="col-span-full">
                <CarouselItem>
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <h3 className="text-lg font-medium">Starter</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold">$9</span>
                      <span className="ml-1 text-sm text-muted-foreground">/month</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">Perfect for small businesses and personal websites.</p>
                    <ul className="mt-6 space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                        1 GB Storage
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                        10 GB Bandwidth
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                        1 Domain
                      </li>
                    </ul>
                    <Button className="mt-6 w-full">Get Started</Button>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <h3 className="text-lg font-medium">Professional</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold">$19</span>
                      <span className="ml-1 text-sm text-muted-foreground">/month</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">Ideal for growing businesses and small teams.</p>
                    <ul className="mt-6 space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                        5 GB Storage
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                        50 GB Bandwidth
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                        5 Domains
                      </li>
                    </ul>
                    <Button className="mt-6 w-full">Get Started</Button>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <h3 className="text-lg font-medium">Enterprise</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold">$49</span>
                      <span className="ml-1 text-sm text-muted-foreground">/month</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      Tailored for large businesses and high-traffic websites.
                    </p>
                    <ul className="mt-6 space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                        20 GB Storage
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                        200 GB Bandwidth
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-5 w-5 text-primary" />
                        Unlimited Domains
                      </li>
                    </ul>
                    <Button className="mt-6 w-full">Get Started</Button>
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
          </div>
        </section>
        <section id="faq" className="bg-background py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Get answers to the most common questions about our hosting services.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-medium">What is the uptime guarantee?</h3>
                <p className="mt-2 text-muted-foreground">
                  We guarantee 99.9% uptime for all our hosting plans. This means your website will be available and
                  accessible to your visitors almost all the time.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-medium">Do you offer 24/7 support?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, our team of experts is available 24 hours a day, 7 days a week to assist you with any issues or
                  questions you may have.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-medium">Can I upgrade my plan later?</h3>
                <p className="mt-2 text-muted-foreground">
                  Absolutely! As your business grows, you can easily upgrade your hosting plan to accommodate your
                  increasing needs. We make the process seamless and hassle-free.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-medium">Do you offer a money-back guarantee?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, we stand behind the quality of our services. If you're not satisfied with your hosting
                  experience, we offer a 30-day money-back guarantee, no questions asked.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-medium">Can I host multiple websites on one plan?</h3>
                <p className="mt-2 text-muted-foreground">
                  Depending on the hosting plan you choose, you can host multiple websites on a single account. Our
                  Professional and Enterprise plans offer support for multiple domains.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-medium">What programming languages do you support?</h3>
                <p className="mt-2 text-muted-foreground">
                  Our hosting platform supports a wide range of programming languages, including PHP, Python, Ruby,
                  Node.js, and more. We ensure your website can run smoothly regardless of the technology stack you
                  choose.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-background py-4 text-center text-sm text-muted-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <p>&copy; 2024 Acme Hosting. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function CpuIcon(props) {
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
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShieldIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}
