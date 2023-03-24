import { Audio } from 'expo-av'

class SoundManager {
    sound = null;
    isPlaying = false;
        
    async loadSound(uri) {
        if (this.sound !== null) {
            await this.sound.unloadAsync();
            this.sound = null
        }        

        this.sound = new Audio.Sound();
        await this.sound.loadAsync(uri);
        await this.sound.playAsync();
        await this.sound.setIsLoopingAsync(true);
        
    }    

    async play() {
        if (this.sound !== null) {
            await this.sound.playAsync();                            
        }
    }
    
    setPlayBackStatusListener(listener) {
        if (this.sound !== null) {
            this.sound.setOnPlaybackStatusUpdate(listener)
        }
    }

    async stop() {
        if (this.sound !== null) {
            await this.sound.stopAsync();                                        
        }
    }
    
    async toggle() {
        if (this.sound !== null) {
            if (this.isPlaying) {
                this.stop();
            } else {
                this.play();
            }   
        }
    }

    async pause() {
        if (this.sound !== null) {
            await this.sound.pauseAsync();            
        }
    }

    async resume() {
        if (this.sound !== null) {
            await this.sound.resumeAsync();            
        }
    }
}

export default new SoundManager();