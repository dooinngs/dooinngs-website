import React from 'react'
import Image from 'next/image'

const PaymentSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 mb-18" >
      <div className="border-1 rounded-lg p-8 relative" style={{borderColor: '#D6D6D6'}}>
        {/* Secured by Paystack Header */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-white px-4 py-2  rounded flex items-center gap-2" style={{borderColor: '#D6D6D6'}}>
            <Image 
              src="/assets/padlock.svg" 
              alt="Lock icon" 
              width={20} 
              height={20}
            />
            <span className="text-black-600 font-medium text-[13px] lg:text-[18px]">
              Secured by <span className="font-bold">Paystack</span>
            </span>
          </div>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-6 gap-6 items-center justify-items-center mt-8">
          {/* MTN Mobile Money */}
          <div className="flex items-center justify-center">
            <Image 
              src="/assets/mtn.png" 
              alt="MTN Mobile Money" 
              width={90} 
              height={40}
              className="object-contain"
            />
          </div>

          {/* Telecel Cash */}
          <div className="flex items-center justify-center">
            <Image 
              src="/assets/telecel.png" 
              alt="Telecel Cash" 
              width={60} 
              height={40}
              className="object-contain"
            />
          </div>

          {/* AT Money */}
          <div className="flex items-center justify-center">
            <Image 
              src="/assets/at.png" 
              alt="AT Money" 
              width={70} 
              height={50}
              className="object-contain"
            />
          </div>

          {/* Visa */}
          <div className="flex items-center justify-center">
            <Image 
              src="/assets/Visa.png" 
              alt="Visa" 
              width={60} 
              height={40}
              className="object-contain"
            />
          </div>

          {/* MasterCard */}
          <div className="flex items-center justify-center">
            <Image 
              src="/assets/MasterCard.png" 
              alt="MasterCard" 
              width={60} 
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center">
            <Image 
              src="/assets/ApplePay.png" 
              alt="ApplePay" 
              width={60} 
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSection