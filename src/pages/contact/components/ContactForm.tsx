import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ContactForm() {
    return (
        <Card className="flex-1 dark:text-white shadow-md w-full md:max-w-2xl">
            <CardHeader>
                <CardTitle className="text-4xl dark:text-(--primary-bg) text-gray-800">

                    Send Us a Message
                </CardTitle>
                <CardDescription >
                    Get in touch with us to discuss your project.
                </CardDescription>
                <CardContent className="p-0 mt-4">

                    <form action="#" method="POST" autoComplete="off">
                        <div className="mb-4 dark:text-white">
                            <input
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                className="w-full py-4 border-gray-300 rounded-md border-b outline-none"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full py-4 border-gray-300 rounded-md border-b outline-none"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                className="w-full py-4 border-gray-300 rounded-md border-b outline-none"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                className="w-full py-4 border-gray-300 rounded-md border-b outline-none"
                                required
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                className="bg-[#005b86] text-white text-lg font-semibold py-6 px-6 rounded-md hover:bg-hover-600 transition duration-200"
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </CardHeader>
        </Card>
    )
}
