import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProjectModal = ({
  projectId,
  projectsData,
  show,
  onClose = () => {},
}) => {
  // Find the project by its ID
  const selectedProject = projectsData.find(
    (project) => project.id === projectId
  );

  return (
    <Transition appear show={!!show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-gray-100 p-6 text-left align-middle shadow-xl transition-all visible opacity-100">
                <DialogTitle
                  as="h3"
                  className="text-xl font-bold leading-6 text-green-900"
                >
                  {selectedProject?.titleLong}
                </DialogTitle>

                <div className="my-3 text-gray-800 leading-10">
                  {selectedProject?.description}
                </div>

                <div className="my-3 flex space-x-4">
                  <div>
                    <Image
                      src={selectedProject.screenshot1}
                      alt={selectedProject.title}
                      width={300}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={selectedProject.screenshot2}
                      alt={selectedProject.title}
                      width={300}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={selectedProject.screenshot3}
                      alt={selectedProject.title}
                      width={300}
                      height={100}
                    />
                  </div>
                </div>

                <div className="my-3">
                  <p className="text-md text-gray-900 font-medium">
                    Technologies : {selectedProject?.tools.join(" ")}
                  </p>
                </div>
                <div className="flex space-x-4 my-3">
                  <Link className="link" href={selectedProject?.githubLink}>
                    <FaGithub size={"2em"} />
                  </Link>
                  <Link className="link" href={selectedProject?.webLink}>
                    <FaLink size={"2em"} />
                  </Link>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[#0f6041] px-4 py-2 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;
