package light.jockey

import org.springframework.web.socket.CloseStatus
import org.springframework.web.socket.WebSocketHandler
import org.springframework.web.socket.WebSocketMessage
import org.springframework.web.socket.WebSocketSession

class HueStateSocketHandler implements WebSocketHandler {

    @Override
    void afterConnectionEstablished(WebSocketSession session) throws Exception {

    }

    @Override
    void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {

    }

    @Override
    void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {

    }

    @Override
    void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {

    }

    @Override
    boolean supportsPartialMessages() {
        return false
    }
}
