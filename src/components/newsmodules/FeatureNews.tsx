import Image from 'next/image';
import './StyleNewsCompo.css';

export default function FeatureNews() {
    return (
        <header suppressHydrationWarning={false} >
            <div className="feature-view">
                <div className="txt-header">Tin tức nổi bật</div>
                <div className='view-content'>
                    <div className='view-left'>
                        <Image
                            src={'/images/contact1.png'}
                            alt="Image"
                            className='img-left'
                            width={512}
                            height={512}
                        />
                         <div className='view-sub-left-txt-content'>
                         <div className='sub-left-txt-content'>
                            <div className='txt-left-feature-header'>
                                Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH, X-Finance hợp tác với tập đoàn ABC đánh dấu bước ngoặt trong ngành ABC song
                            </div>
                            <div className='view-date-feature-content'>
                                <Image
                                    src={'/images/time.png'}
                                    alt="Image"
                                    width={24}
                                    height={24}
                                    color='#FFFFFF'
                                    className='img-time-left'
                                />
                                <div className='txt-time-left'>12:20 12/12/2025</div>
                            </div>
                        </div>
                         </div>
                    </div>
                    <div className='view-right'>
                        <div className='sub-content-right'>
                            <Image
                                src={'/images/feature1.png'}
                                alt="Image"
                                className='img'
                                width={220}
                                height={160}
                            />
                            <div className='sub-txt-content'>
                                <div className='txt-feature-header'>
                                    Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH, X-Finance hợp tác với tập đoàn ABC đánh dấu bước ngoặt trong ngành ABC song
                                </div>
                                <div className='view-date-feature-content'>
                                    <Image
                                        src={'/images/time.png'}
                                        alt="Image"
                                        width={24}
                                        height={24}
                                        className='img-time'
                                    />
                                    <div className='txt-time'>12:20 12/12/2025</div>
                                </div>
                            </div>
                        </div>
                        <div className='sub-content-right'>
                            <Image
                                src={'/images/feature2.png'}
                                alt="Image"
                                width={220}
                                height={160}
                                className='img'
                            />
                            <div className='sub-txt-content'>
                                <div className='txt-feature-header'>
                                    Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH, X-Finance hợp tác với tập đoàn ABC đánh dấu bước ngoặt trong ngành ABC song
                                </div>
                                <div className='view-date-feature-content'>
                                    <Image
                                        src={'/images/time.png'}
                                        alt="Image"
                                        width={24}
                                        height={24}
                                        className='img-time'
                                    />
                                    <div className='txt-time'>12:20 12/12/2025</div>
                                </div>
                            </div>
                        </div>
                        <div className='sub-content-right'>
                            <Image
                                src={'/images/feature4.png'}
                                alt="Image"
                                width={220}
                                height={160}
                                className='img'
                            />
                            <div className='sub-txt-content'>
                                <div className='txt-feature-header'>
                                    Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH, X-Finance hợp tác với tập đoàn ABC đánh dấu bước ngoặt trong ngành ABC song
                                </div>
                                <div className='view-date-feature-content'>
                                    <Image
                                        src={'/images/time.png'}
                                        alt="Image"
                                        width={24}
                                        height={24}
                                        className='img-time'
                                    />
                                    <div className='txt-time'>12:20 12/12/2025</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
