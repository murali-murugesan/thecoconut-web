import { Card } from "antd";


function Home() {
  return (
    <>
      <Card className="min-h-screen max-h-screen">
       
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore the learnings</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">Find some learnings and ideas to help in your tech journey</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500">Mar 16, 2020</time>
                  <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Ideas</a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Build pipeline
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src="https://media.licdn.com/dms/image/D5603AQHhY8zbKHNTGg/profile-displayphoto-shrink_800_800/0/1711449051597?e=1724284800&v=beta&t=YzUkCi2eqAq41GymIiVCyOOwg2wYOGyyCYfWHTodaD4" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Murali Murugesan
                      </a>
                    </p>
                    <p className="text-gray-600">Author</p>
                  </div>
                </div>
              </article>

              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500">Mar 16, 2020</time>
                  <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Learnings</a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Deploy static webapp on Azure
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src="https://media.licdn.com/dms/image/D5603AQHhY8zbKHNTGg/profile-displayphoto-shrink_800_800/0/1711449051597?e=1724284800&v=beta&t=YzUkCi2eqAq41GymIiVCyOOwg2wYOGyyCYfWHTodaD4" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Murali Murugesan
                      </a>
                    </p>
                    <p className="text-gray-600">Author</p>
                  </div>
                </div>
              </article>
              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500">Mar 16, 2020</time>
                  <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Learnings</a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Deploy App service on Azure
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src="https://media.licdn.com/dms/image/D5603AQHhY8zbKHNTGg/profile-displayphoto-shrink_800_800/0/1711449051597?e=1724284800&v=beta&t=YzUkCi2eqAq41GymIiVCyOOwg2wYOGyyCYfWHTodaD4" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Murali Murugesan
                      </a>
                    </p>
                    <p className="text-gray-600">Author</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        

      </Card>
    </>);
}

export default Home;