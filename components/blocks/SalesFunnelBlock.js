/* This example requires Tailwind CSS v2.0+ */
import {useState} from 'react'
import ReactMarkdown from 'react-markdown';
import SalesFunnels from '../SalesFunnels'
import funnels from '../../_data/funnels'
import Modal from '../basic/Modal'
import CloudinaryImage from '../CloudinaryImage'
import Block from './Block';
import BlockContainer from './BlockContainer';

export default function SalesFunnelBlock({text}) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('default')

  const toggleModal = () => {
    setOpen(!open)
  }

  const setFunnel = (funnel) => {
    setSelected(funnel)
    setOpen(true)
  }

  return (
    <Block>
      <BlockContainer>
        <div className="relative bg-brand-blue-light py-8 sm:py-24">
          <div className="mx-auto max-w-md px-4  sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="prose prose-lg  mx-auto max-w-5xl text-center">
              { text ? <ReactMarkdown children={text}/> : ''}
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-lg mx-auto">
                {funnels.map((funnel,i) => (
                  <button key={i} onClick={e=> setFunnel(funnel.name)}>
                    <CloudinaryImage
                      src={funnel.icon}
                      className="block w-auto h-20 mx-auto"
                      width={40}
                      height={40}
                      ariaHidden={true}
                    />
                    {funnel.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Modal open={open} toggleModal={toggleModal}>
              <SalesFunnels selected={selected}/>
          </Modal>
        </div>
      </BlockContainer>
    </Block>
  )
}
